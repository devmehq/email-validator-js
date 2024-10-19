import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "coverage/**",
      "fixtures/**",
      "dist/**"
    ]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "unused-imports": unusedImports
    }
  },
  eslintConfigPrettier,
  {
    rules: {
      "prefer-const": [
        "error",
        {
          destructuring: "all"
        }
      ],
      "no-empty": "off",
      "no-undef": "off",
      "no-extra-boolean-cast": "off",
      "no-unsafe-optional-chaining": "off",
      "no-useless-escape": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/typedef": [
        "error",
        {
          arrowParameter: false,
          variableDeclaration: false
        }
      ]
    }
  }
];
