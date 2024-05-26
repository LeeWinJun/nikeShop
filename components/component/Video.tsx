interface VideoProps {
  src: string;
  desc: string;
  title: string;
  subtitle: string;
}

const Video: React.FC<VideoProps> = ({ src, desc, title, subtitle }) => {
  const formattedDesc = desc.split("<br>").map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  return (
    <div>
      <video autoPlay={true} muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className="card-container text-center">
        <p className="mb-4 mt-12 font-medium">{subtitle}</p>
        <h2 className="mb-4 font-bold">{title}</h2>
        {formattedDesc}
      </div>
    </div>
  );
};

export default Video;
