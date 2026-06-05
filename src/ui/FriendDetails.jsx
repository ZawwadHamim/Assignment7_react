import { useParams } from "react-router";
import { FaPhone, FaCommentAlt, FaVideo, FaBell, FaArchive, FaTrash } from "react-icons/fa";
import { useFriends } from "../context/FriendContext";
import { toast, ToastContainer } from "react-toastify";
import { format, parseISO } from "date-fns";
import "react-toastify/dist/ReactToastify.css";

const statusConfig = {
  ok:      { label: "Active",  classes: "bg-green-100 text-green-700" },
  overdue: { label: "Overdue", classes: "bg-red-500 text-white" },
  upcoming:{ label: "Upcoming","classes": "bg-blue-100 text-blue-700" },
};

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading, addTimelineEntry } = useFriends();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-400">
        Loading...
      </div>
    );
  }

  // friends.json uses numeric ids; useParams gives a string — coerce both
  const friend = friends.find((f) => String(f.id) === String(id));

  if (!friend) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-400">
        Friend not found.
      </div>
    );
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  const statusMeta = statusConfig[status] ?? { label: status, classes: "bg-gray-200 text-gray-600" };

  const formattedDue = next_due_date
    ? format(parseISO(next_due_date), "MMM d, yyyy")
    : "—";

  const handleCheckIn = (type) => {
    const today = format(new Date(), "MMM d, yyyy");
    addTimelineEntry(friend.id, {
      date: today,
      title: `${type} with ${name}`,
      type: type.toLowerCase(),
    });
    toast.success(`✅ ${type} with ${name} logged on ${today}`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-5 grid-rows-7 gap-3 min-h-screen p-4 bg-slate-100">

        {/* 1 — Profile card: cols 1-2, rows 1-4 */}
        <div className="col-span-2 row-span-4 bg-white rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center gap-3 text-center">
          {picture ? (
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-slate-200"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-indigo-400 flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
          <h2 className="text-lg font-bold text-slate-900">{name}</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusMeta.classes}`}>
              {statusMeta.label}
            </span>
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                {tag}
              </span>
            ))}
          </div>
          {bio && <p className="text-sm text-slate-500 italic">"{bio}"</p>}
          {email && <p className="text-xs text-slate-400">Preferred: email</p>}
        </div>

        {/* 2 — Snooze */}
        <button className="col-span-2 row-span-1 bg-white rounded-xl border border-slate-200 px-4 flex items-center gap-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
          <FaBell className="text-slate-400" /> Snooze 2 Weeks
        </button>

        {/* 3 — Archive */}
        <button className="col-span-2 row-span-1 bg-white rounded-xl border border-slate-200 px-4 flex items-center gap-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
          <FaArchive className="text-slate-400" /> Archive
        </button>

        {/* 4 — Delete */}
        <button className="col-span-2 row-span-1 bg-white rounded-xl border border-slate-200 px-4 flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
          <FaTrash className="text-red-400" /> Delete
        </button>

        {/* 5 — Days Since Contact: col 3, rows 1-2 */}
        <div className="col-start-3 row-start-1 row-span-2 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl font-bold text-slate-900">{days_since_contact}</span>
          <span className="text-xs text-slate-400 mt-1">Days Since Contact</span>
        </div>

        {/* 6 — Goal: col 4, rows 1-2 */}
        <div className="col-start-4 row-start-1 row-span-2 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl font-bold text-slate-900">{goal}</span>
          <span className="text-xs text-slate-400 mt-1">Goal (Days)</span>
        </div>

        {/* 7 — Next Due: col 5, rows 1-2 */}
        <div className="col-start-5 row-start-1 row-span-2 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-xl font-bold text-teal-700 leading-tight">{formattedDue}</span>
          <span className="text-xs text-slate-400 mt-1">Next Due</span>
        </div>

        {/* 8 — Relationship Goal: cols 3-5, rows 3-4 */}
        <div className="col-start-3 col-span-3 row-start-3 row-span-2 bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-900">Relationship Goal</h3>
            <button className="text-xs border border-slate-200 rounded-md px-3 py-1 hover:bg-slate-50 transition-colors">
              Edit
            </button>
          </div>
          <hr className="border-slate-100 mb-3" />
          <p className="text-sm text-slate-600">
            Connect every <strong>{goal} days</strong>
          </p>
        </div>

        {/* 9 — Quick Check-In: cols 3-5, rows 5-7 */}
        <div className="col-start-3 col-span-3 row-start-5 row-span-3 bg-white rounded-xl border border-slate-200 p-5 flex flex-col">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Quick Check-In</h3>
          <div className="flex-1 grid grid-cols-3 gap-3">
            {[
              { type: "Call",  Icon: FaPhone },
              { type: "Text",  Icon: FaCommentAlt },
              { type: "Video", Icon: FaVideo },
            ].map(({ type, Icon }) => (
              <button
                key={type}
                onClick={() => handleCheckIn(type)}
                className="bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Icon className="text-lg" />
                {type}
              </button>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default FriendDetails;