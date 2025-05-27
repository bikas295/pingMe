'use client';

import { useRequests } from '@/lib/hooks';
import RequestTable from './RequestTable';

export default function RequestsPage() {
  const { data, isLoading, error } = useRequests();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-serif text-blue-900 mb-8 tracking-wide">Guest Requests</h1>
      {isLoading ? (
        <p className="p-4">Loading...</p>
      ) : error ? (
        <p className="p-4 text-red-500">Error loading requests.</p>
      ) : (
        <RequestTable requests={data || []} />
      )}
    </div>
  );
} 