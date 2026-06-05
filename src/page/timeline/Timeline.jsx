import { useFriends } from "../../context/FriendContext";
import { FaPhone, FaCommentAlt, FaVideo } from "react-icons/fa";

const typeConfig = {
  call:  { Icon: FaPhone,      label: "Call"  },
  text:  { Icon: FaCommentAlt, label: "Text"  },
  video: { Icon: FaVideo,      label: "Video" },
};

const Timeline = () => {
  const { friends, getTimeline } = useFriends();

  const allEntries = friends
    .map((friend) =>
      getTimeline(friend.id).map((entry) => ({
        ...entry,
        friendName: friend.name,
        friendPicture: friend.picture,
      }))
    )
    .flat()
    .sort((a, b) => b.id - a.id);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Timeline</h1>

      {allEntries.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">No interactions yet.</p>
          <p className="text-sm mt-1">
            Go to a friend's page and log a call, text, or video.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {allEntries.map((entry) => {
            const config = typeConfig[entry.type] ?? typeConfig.call;
            const { Icon } = config;

            return (
              <div
                key={entry.id}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-slate-500 text-base" />
                </div>

                {entry.friendPicture ? (
                  <img
                    src={entry.friendPicture}
                    alt={entry.friendName}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {entry.friendName?.charAt(0)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">
                    {entry.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{entry.date}</p>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 text-slate-500 flex-shrink-0">
                  {config.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Timeline;