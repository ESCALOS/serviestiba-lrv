import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const PhotoSwipeVideo = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#gallery--video-demo",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });

        // parse data-youtube-url attribute
        lightbox.addFilter("itemData", (itemData) => {
            const youtubeUrl = itemData.element?.dataset.youtubeUrl;
            if (youtubeUrl) {
                itemData.youtubeUrl = youtubeUrl;
            }
            return itemData;
        });

        // override slide content
        lightbox.on("contentLoad", (e) => {
            const { content } = e;
            if (content.type === "youtube-video") {
                e.preventDefault();

                // Create a container for iframe
                content.element = document.createElement("div");
                content.element.className = "pswp__youtube-container";

                const iframe = document.createElement("iframe");
                iframe.setAttribute("allowfullscreen", "");
                iframe.src = content.data.youtubeUrl; // Video URL from data attribute
                content.element.appendChild(iframe);
            }
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <div
            id="gallery--video-demo"
            className="bg-green-300 max-w-96 lg:max-w-none rounded-tl-3xl rounded-br-3xl"
        >
            <a
                href="https://www.youtube.com/watch?v=yGIXxVFIT9M"
                data-pswp-type="youtube-video"
                data-youtube-url="https://www.youtube.com/embed/yGIXxVFIT9M"
                className="block p-6"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative order-2 sm:order-1">
                        <img
                            src="/images/video-thumbnail.webp" // Miniatura del video
                            alt="video"
                            className="object-cover w-full h-full"
                            width={400}
                        />
                        <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <MdOutlinePlayCircleFilled
                                className="text-white"
                                size={56}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Conócenos
                        </h3>
                        <p className="font-bold text-gray-700">Ver video</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PhotoSwipeVideo;
