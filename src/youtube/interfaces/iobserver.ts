import Video from "../classes/video";

export default interface IOberver {
    update(video: Video) : void;
}