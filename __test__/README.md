# Testing Guide

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react) for testing.

## Running Tests

```bash
# Run tests once
pnpm test

# Run tests in watch mode (recommended during development)
pnpm test -- --watch

# Run tests with UI
pnpm test:ui

# Run tests with coverage report
pnpm test:coverage
```

## Test Structure

All tests are centralized in the `__test__/` directory, mirroring the source code structure:

```
__test__/
  setup.tsx              # Test environment setup
  README.md              # This file
  components/
    LanguageSwitcher.test.tsx
    ThemeSwitcher.test.tsx
    SocialIcons.test.tsx
  hooks/
    useWindowSize.test.ts
  constants/
    locales.test.ts
    social.test.ts
```

Tests use path aliases (`@/components`, `@/hooks`, etc.) to import source files.

## Writing Tests

### Component Tests

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Hook Tests

```typescript
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMyHook } from '@/hooks/useMyHook';

describe('useMyHook', () => {
  it('should return initial value', () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current).toBe(expectedValue);
  });
});
```

## Mocked Modules

The following modules are pre-mocked in `__test__/setup.tsx`:

- `next/router` - useRouter hook
- `next/link` - Link component
- `next-translate/useTranslation` - useTranslation hook
- `next-themes` - useTheme hook and ThemeProvider

You can override these mocks in individual test files if needed:

```typescript
import { vi } from 'vitest';

const mockUseRouter = vi.fn();

vi.mock('next/router', () => ({
  useRouter: mockUseRouter,
}));

// In your test
mockUseRouter.mockReturnValue({
  locale: 'es',
  // ... other properties
});
```

## Best Practices

1. **Test user behavior, not implementation details**
   - Use `screen.getByRole()` over `container.querySelector()`
   - Test what users see and interact with

2. **Keep tests simple and focused**
   - One concept per test
   - Clear test descriptions

3. **Use appropriate queries**
   - Prefer `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
   - [Query priority guide](https://testing-library.com/docs/queries/about/#priority)

4. **Clean up after tests**
   - Already handled automatically in `__test__/setup.tsx`

5. **Use testing-library user-event for interactions**
   ```typescript
   import userEvent from '@testing-library/user-event';

   const user = userEvent.setup();
   await user.click(button);
   ```

## Coverage

Coverage reports are generated in the `coverage/` directory when running `pnpm test:coverage`.

The `__test__/` directory is excluded from coverage reports (configured in `vitest.config.ts`).

Target coverage goals:
- Statements: 80%+
- Branches: 80%+
- Functions: 80%+
- Lines: 80%+

## Useful Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
