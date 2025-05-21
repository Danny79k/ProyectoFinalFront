

export function Rules() {
  return (
    <div className="rules flex flex-col items-center bg-white px-6 py-10 rules-container">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">
          Community Guidelines
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-6 text-center">
          Our platform is dedicated to delivering reliable news and fostering
          respectful discussions. To maintain a healthy environment, all users
          must follow these rules:
        </p>

        <ul className="list-disc pl-6 text-gray-800 space-y-4 text-base md:text-lg">
          <li>
            <strong>No fake news:</strong> Sharing misinformation or
            deliberately misleading content is strictly prohibited.
          </li>
          <li>
            <strong>Respect others:</strong> Treat all users, including
            journalists and fellow readers, with courtesy and respect.
          </li>
          <li>
            <strong>No hate speech:</strong> Racist, sexist, xenophobic,
            homophobic, or otherwise hateful content will not be tolerated.
          </li>
          <li>
            <strong>No harassment:</strong> Bullying, threats, or targeted
            harassment of any kind are grounds for immediate suspension.
          </li>
          <li>
            <strong>No spam or self-promotion:</strong> Irrelevant
            advertisements, repetitive posts, or unrelated links are not
            allowed.
          </li>
          <li>
            <strong>Stay on topic:</strong> Comments and posts should be
            relevant to the news or discussions at hand.
          </li>
          <li>
            <strong>Protect privacy:</strong> Do not share personal information
            of others without their consent.
          </li>
          <li>
            <strong>Journalistic integrity:</strong> Journalists must adhere to
            ethical standards—fact-checking, citing sources, and correcting
            errors when necessary.
          </li>
          <li>
            <strong>Report misconduct:</strong> Help us maintain the community
            by reporting any behavior that violates these rules.
          </li>
        </ul>

        <p className="text-gray-600 mt-8 text-center">
          Violation of these guidelines may result in content removal, account
          suspension, or permanent bans.
        </p>

        <p className="text-gray-500 mt-4 text-center italic">
          Together, we can build a trustworthy and respectful news community.
        </p>
      </div>
    </div>
  );
}

export default Rules;
