import ProtectedRoute from "@/components/protectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center h-full bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg mb-4">Welcome to your dashboard!</p>
        {/* Add more dashboard content here */}
      </div>
    </ProtectedRoute>
  );
}
