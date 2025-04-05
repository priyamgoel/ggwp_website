export default function Footer() {
  return (
    <footer className="bg-black py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">Powered by Code and Coffee at Thapar Institute of Engineering and Technology</p>
        <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
