import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function JobRow() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm relative flex gap-4">
      <div className="absolute cursor-pointer top-4 right-4">
        <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
      </div>
      <div className="flex grow gap-4">
        <div className="content-center w-12 basis-12 shrink-0">
          <img
            className="size-12"
            src={'https://www.w3schools.com/images/lamp.jpg'}
            alt="logo spotify"
          />
        </div>
        <div className="grow ">
          <div className="text-gray-500 text-sm">Spotify</div>
          <div className="font-bold mb-2">Product designer</div>
          <div className="text-gray-400 text-xs">
            Remote &middot; New Yourk, US &middot; Full time
          </div>
        </div>
        <div className="content-end text-gray-500 text-xs">
          2 weeks ago {/* <TimeAgo createdAt={jobDoc.createdAt} /> */}
        </div>
      </div>
    </div>
  );
}
