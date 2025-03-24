export default function ColorChangeTest() {
    return (
      <div className="flex flex-wrap gap-4 p-5">
        <div className="w-xl-px h-20 bg-red-500 text-white flex items-center justify-center">xl-px (300px)</div>
        <div className="w-lg-xl-px h-20 bg-green-500 text-white flex items-center justify-center">lg-xl-px (180px)</div>
        <div className="w-lg-px h-20 bg-orange-500 text-white flex items-center justify-center">lg-px (250px)</div>
        <div className="w-md-lg-px h-20 bg-blue-500 text-white flex items-center justify-center">md-lg-px (100px)</div>
        <div className="w-md-px h-20 bg-purple-500 text-white flex items-center justify-center">md-px (70px)</div>
        <div className="w-sm-md-px h-20 bg-pink-500 text-white flex items-center justify-center">sm-md-px (60px)</div>
        <div className="w-sm-px h-20 bg-slate-500 text-white flex items-center justify-center">sm-px (50px)</div>
        <div className="w-xs-sm-px h-20 bg-yellow-500 text-black flex items-center justify-center">xs-sm-px (50px)</div>
        <div className="w-xs-px h-20 bg-white border text-black flex items-center justify-center">xs-px (50px)</div>
      </div>
    );
  }