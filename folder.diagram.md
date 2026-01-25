src/
├── app/                      # Next.js App Router (Routing & Layouts)
│   ├── (dashboard)/
│   │   └── posts/page.tsx    # Server Component (Uses api.ts for fetch)
│   ├── layout.tsx            # Wraps with <AppProvider />
│   └── api/                  # Route Handlers (If needed)
│
├── features/                 # Modular Business Logic (Feature-first)
│   ├── posts/
│   │   ├── components/       # Feature UI (PostCard, PostForm)
│   │   ├── api.ts            # Server-side Fetchers (GET requests) 👈 For Server Components
│   │   ├── actions.ts        # Server Actions (POST, PUT, DELETE)
│   │   ├── queries.ts        # Client-side Hooks (React Query + useApiQuery)
│   │   ├── types.ts          # Zod Schemas & TS Types
│   │   └── index.ts          # Public entry point (Barrel file)
│   └── auth/ ...
│
├── components/               # Global Shared Components
│   ├── ui/                   # Shadcn/UI (Button, Input, etc.)
│   └── shared/               # Navbar, Sidebar, Footer
│
├── hooks/                    # Global Reusable Hooks
│   ├── useApi.ts             # useApiQuery & useApiMutation wrappers
│   └── useDebounce.ts
│
├── lib/                      # External Library Configs
│   ├── axios.ts              # Axios instance setup
│   ├── env.ts                # Type-safe Env using Zod
│   └── utils.ts              # Tailwind merge (cn) helper
│
├── providers/                # All Global Context/Providers
│   └── app-provider.tsx      # React Query + Theme + Auth
│
├── types/                    # Global/Common TypeScript Types
└── constants/                # App Constants (URLs, Route names)