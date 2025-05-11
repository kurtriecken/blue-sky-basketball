export default function About() {
  return (
    <div className="card flex-column">
      <h2 className="text-xl font-semibold mb-4">About Blue Sky Basketball</h2>
      <p>
        Blue Sky Basketball is dedicated to providing players, coaches, and
        parents with the tools and knowledge to improve basketball skills
        through effective teaching methods.
      </p>
      <div className="mt-4">
        <h3 className="font-medium">Our Mission:</h3>
        <p>
          To create a positive impact in the basketball community by promoting
          skill development, sportsmanship, and mental toughness.
        </p>
      </div>
      <div className="flex justify-center">
          <img
            src="/assets/basketball-cloud.webp" // This should be in your public/assets folder
            alt="Basketball with Clouds"
            className="w-16 h-16 mr-4 rounded-[10vw]"
          />
      </div>
    </div>
  );
}
