export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">Powered by Code and Coffee at Thapar Institute of Engineering and Technology</p>
        <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
