# Documentation

#### Review Notes

Great work on your portfolio! Below are some suggestions to improve the structure and organization of your Next.js project:

1. **Component Organization:** Aim to group similar components into dedicated folders to maintain clarity.
   Example: Create a folder /components/navigation for all navigation-related components like MobileNav, Nav, etc. This could include Header.tsx and NavLinks.tsx.
2. **File Organization:** It's beneficial to organize your files systematically.
   Store favicon.ico in the public folder.
   Place globals.css inside a /styles/ folder for better accessibility and management.
3. **Interfaces and Types:** Consider creating a dedicated folder /types/ for all your interfaces and types.
   You can group related interfaces and types in individual files within this folder. Alternatively, you could consolidate them into a single index.d.ts file for centralized access.
4. **Component Writing Style:** For defining components, it's recommended to use the function declaration syntax.
   Preferred way:

   ```javascript
   export function NAME_COMPONENT(...) {
       // code...
   }

   ```

   Less recommended way:

   ```javascript
   const NAME_COMPONENT = () => {
     // code...
   };
   export default NAME_COMPONENT;
   ```

* You can add more projects in the /config/projects.ts
* You can use Shadcn UI library i configured so you 
* 