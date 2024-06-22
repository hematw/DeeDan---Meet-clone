// src/Webcam.js
import React, { useRef, useEffect, useState } from 'react';

const Camera = () => {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setIsCameraOn(true);
        } catch (err) {
            console.error("Error accessing webcam: ", err);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setIsCameraOn(false);
    };

    useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                stopCamera();
            }
        };
    }, []);

    return (
        <div>
            <input
                type="button"
                value={isCameraOn ? "Stop Camera" : "Start Camera"}
                onClick={isCameraOn ? stopCamera : startCamera}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            />
            <div className="mt-4">
                <video ref={videoRef} width="640" height="480" />
            </div>
        </div>
    );
};

export default Camera;
