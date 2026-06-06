import { useFriends } from "../../context/FriendContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#ef4444", "#eab308"];

const Stats = () => {
  const { friends, getTimeline } = useFriends();

  // Count all interactions by type across all friends
  const counts = friends
    .map((friend) => getTimeline(friend.id))
    .flat()
    .reduce(
      (acc, entry) => {
        const type = entry.type ?? "call";
        acc[type] = (acc[type] ?? 0) + 1;
        return acc;
      },
      { call: 0, text: 0, video: 0 }
    );

  const data = [
    { name: "Call",  value: counts.call  },
    { name: "Text",  value: counts.text  },
    { name: "Video", value: counts.video },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-slate-700 mb-1">
          Interaction Breakdown
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          {total} total interaction{total !== 1 ? "s" : ""} logged
        </p>

        {total === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg">No interactions yet.</p>
            <p className="text-sm mt-1">
              Log a call, text, or video from a friend's page.
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value} interaction${value !== 1 ? "s" : ""}`, name]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "13px",
                  color: "#495569",
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: "13px", color: "#64748b" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Stats;