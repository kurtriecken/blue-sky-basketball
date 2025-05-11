export default function Videos() {
  return (
    <div className="card p-8">
      <h2 className="text-3xl font-semibold mb-6">Basketball Video Tutorials</h2>
      <p className="mb-4">Explore these videos to improve your basketball skills, whether you're a player or a coach!</p>
      
      <ul className="space-y-4">
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Dribbling Drills for Beginners
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Shooting Technique and Form
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Mental Game: Focus and Mindset
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Defensive Stance and Footwork
          </a>
        </li>
      </ul>
    </div>
  );
}
