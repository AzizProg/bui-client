const VideoSection = () => {
  return (
    <section>
      <video loop muted autoPlay className="w-screen">
        <source src="/bui_video_en.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
