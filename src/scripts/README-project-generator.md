# Project Pages Generator

This script generates individual MDX pages for each project based on the data in featured.json.

## How to Use

1. Run this script from the project root:
   ```
   node src/scripts/generate-project-pages.js
   ```

2. The script will:
   - Create the directory 'src/pages/projects/' if it doesn't exist
   - Generate an MDX file for each project in featured.json
   - Each file will be named using the project's slug

3. To customize the generated content:
   - Edit the template in the createProjectMDX function
   - Add more project-specific data to featured.json
   - Implement custom logic based on project categories

## File Structure

Each generated file follows this structure:
- Frontmatter with layout, title and description
- Project title and description
- Callout with language and category
- Features section (customized by category)
- Technical details (customized by category)
- Links to GitHub and related resources
- Navigation back to the projects page
