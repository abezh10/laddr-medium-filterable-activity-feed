import ActivityFeed from "../components/activity/ActivityFeed";
import FeedFilters from "../components/activity/FeedFilters";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Build / Frontend</p>
          <h1 className="mt-2 text-3xl font-semibold">Filterable Activity Feed</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">The activity feed is noisy for active projects. Add client-side filters for event type and unread status while preserving pagination and mobile usability.</p>
        </header>
      <ActivityFeed />
      <FeedFilters />
      </div>
    </main>
  );
}
