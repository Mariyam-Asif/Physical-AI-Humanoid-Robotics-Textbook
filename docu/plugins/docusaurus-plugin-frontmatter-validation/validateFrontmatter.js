const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Ajv = require('ajv');

const ajv = new Ajv(); // options can be passed, e.g., {allErrors: true}

function getMdxFiles(dir) {
  let mdxFiles = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      mdxFiles = mdxFiles.concat(getMdxFiles(fullPath));
    } else if (file.isFile() && fullPath.endsWith('.mdx')) {
      mdxFiles.push(fullPath);
    }
  }
  return mdxFiles;
}

function extractFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch && frontmatterMatch[1]) {
    try {
      return yaml.load(frontmatterMatch[1]);
    } catch (e) {
      return { parseError: e.message };
    }
  }
  return null;
}

function validateFrontmatter(docsDir, schemaPath) {
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const mdxFiles = getMdxFiles(docsDir);
  const errors = [];
  const warnings = [];

  for (const file of mdxFiles) {
    const frontmatter = extractFrontmatter(file);

    if (frontmatter && frontmatter.parseError) {
      errors.push(`File: ${file} - Frontmatter Parse Error: ${frontmatter.parseError}`);
      continue;
    }

    if (frontmatter) {
      const isValid = validate(frontmatter);
      if (!isValid) {
        validate.errors.forEach(err => {
          errors.push(`File: ${file} - Frontmatter Validation Error: ${err.instancePath} ${err.message} (Value: ${JSON.stringify(err.data)})`);
        });
      }
    } else {
      // Optionally warn if no frontmatter is found, or if it's expected to always be there
      // warnings.push(`File: ${file} - No frontmatter found.`);
    }
  }
  return { errors, warnings };
}

module.exports = { validateFrontmatter };
