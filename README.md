## Simple Next.js App

### Getting Started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Common Commands

```bash
npm run lint
npm run build
npm run start
```

### Admin Dashboard

- Visit `/maamule` and sign in with the `ADMIN_PASSWORD`.
- Use the **Blog Manager** section to publish new posts.

### Environment Variables

Create `.env.local` with:

```dotenv
ADMIN_PASSWORD=your-password
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Supabase Tables

Create these tables when using Supabase:

```sql
create table if not exists form_submissions (
	id uuid primary key,
	type text not null,
	created_at timestamptz not null default now(),
	fields jsonb not null
);

create table if not exists blog_posts (
	id uuid primary key,
	slug text not null unique,
	title text not null,
	excerpt text not null,
	content text not null,
	image_url text,
	category text,
	author text,
	author_role text,
	read_time text,
	tags text[] not null default '{}',
	highlights text[] not null default '{}',
	next_steps text[] not null default '{}',
	stats text[] not null default '{}',
	published_at timestamptz,
	created_at timestamptz not null default now()
);

create table if not exists blog_categories (
	id uuid primary key,
	name text not null,
	slug text not null unique,
	created_at timestamptz not null default now()
);

create table if not exists leadership (
	id uuid primary key,
	name text not null,
	role text not null,
	image_url text,
	alt_text text,
	sort_order integer not null default 0,
	created_at timestamptz not null default now()
);
```

### Supabase Storage (Uploads)

- Create a public bucket named `form-uploads`.
- This bucket stores files from forms (e.g. NGO concept notes).
