import ProtectedRoute from "@/components/protectedRoute";

export default function Settings() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center h-full bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>
        <p className="text-lg mb-4">Manage your settings here.</p>
        {/* Add more settings content here */}
      </div>
    </ProtectedRoute>
  );
}
