export default function Whatwedoanim() {
    return (
        <div className="flex  justify-end  anim-left">
        <video  autoPlay loop muted  className=" w-[80%] rounded-2xl video-" >
            <source src="./Videos/whatwedoside.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    );
};

