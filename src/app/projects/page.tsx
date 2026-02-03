import SiteNav from "@/components/SiteNav";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <SiteNav />
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This page is ready for your project details.
          </p>
        </div>
      </div>
    </div>
  );
}
