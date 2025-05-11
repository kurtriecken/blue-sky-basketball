export default function Recommendations() {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Do's & Don'ts in Basketball</h2>
      <p>
        Learn the best practices and common mistakes to avoid while playing basketball, ensuring safe and effective gameplay.
      </p>
      <div className="mt-4">
        <h3 className="font-medium">Do's:</h3>
        <ul className="list-disc ml-6">
          <li>Focus on fundamentals</li>
          <li>Practice regularly</li>
          <li>Work on both offensive and defensive skills</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Don'ts:</h3>
        <ul className="list-disc ml-6">
          <li>Ignore conditioning</li>
          <li>Overlook the importance of teamwork</li>
          <li>Become complacent with your skills</li>
        </ul>
      </div>
    </div>
  );
}
