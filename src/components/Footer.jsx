export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Sahil Thakur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
