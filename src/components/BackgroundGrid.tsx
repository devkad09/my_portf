export const BackgroundGrid = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Soft light top ambient glow */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-slate-100/70 blur-[100px]" />

      {/* Subtle light engineering dot grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-80" />
    </div>
  );
};

export default BackgroundGrid;
