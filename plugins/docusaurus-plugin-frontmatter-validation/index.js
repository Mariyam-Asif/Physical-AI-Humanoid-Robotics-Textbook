const path = require('path');
const fs = require('fs');
const { validateFrontmatter } = require('./validateFrontmatter');

module.exports = function(context, options) {
  return {
    name: 'docusaurus-plugin-frontmatter-validation',
    async loadContent() {
      // This hook runs before the build and allows us to perform validation.
      const docsDir = path.join(context.siteDir, 'docs'); // Assuming docs are in `docs` folder
      const schemaPath = path.join(context.siteDir, 'schemas', 'chapter-metadata-schema.json');
      const result = validateFrontmatter(docsDir, schemaPath);

      if (result.errors.length > 0) {
        console.error('\n[Frontmatter Validation Error]');
        result.errors.forEach(error => console.error(error));
        // You can choose to throw an error to halt the build
        throw new Error('Frontmatter validation failed. See errors above.');
      } else if (result.warnings.length > 0) {
        console.warn('\n[Frontmatter Validation Warning]');
        result.warnings.forEach(warning => console.warn(warning));
      } else {
        console.log('[Frontmatter Validation] All MDX frontmatter validated successfully.');
      }
      return null; // No content to load for this plugin
    },
  };
};
