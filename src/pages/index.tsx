import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">GitHub Internal Analytics Tool</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Phân tích toàn bộ repository, branch, commit, contributor theo định danh ticket như <code>SINOFIX-123</code>,
                    hỗ trợ lọc, export CSV, và xóa branch đã đóng hoặc không dùng nữa.
                </p>
                <Link href="/analytics" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                    Bắt đầu phân tích

                </Link>
            </div>
        </main>
    );
}