
declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
    };
  }
}

const TopBar: React.FC = () => {
  const handleMinimize = () => window.electronAPI.minimize();
  const handleMaximize = () => window.electronAPI.maximize();
  const handleClose = () => window.electronAPI.close();

  return (
    <div className="flex items-center justify-between h-8 px-3 bg-zinc-900 text-white select-none" style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}>
      <div className="flex-1" />

      <div className="flex space-x-2" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        <button
          onClick={handleMinimize}
          className="w-8 h-6 flex items-center justify-center hover:bg-zinc-700 rounded"
          title="Minimize"
        >
          &#8211;
        </button>
        <button
          onClick={handleMaximize}
          className="w-8 h-6 flex items-center justify-center hover:bg-zinc-700 rounded"
          title="Maximize"
        >
          ☐
        </button>
        <button
          onClick={handleClose}
          className="w-8 h-6 flex items-center justify-center hover:bg-red-600 rounded"
          title="Close"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default TopBar;
