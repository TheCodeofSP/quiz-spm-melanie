const profileContents = require("../data/profileContents");

const separator = `
  <div style="height: 1px; background: #e8dfd8; margin: 32px 0;"></div>
`;

const buildProfileBlock = (profileKey) => {
  const content = profileContents[profileKey];

  if (!content) return "";

  return `
    <section style="margin-top: 24px;">
      <h2 style="color: #8b6a5f; font-size: 24px; line-height: 1.3; margin: 0 0 16px;">
        🌸 SPM « ${content.title} »
      </h2>

      <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
        ${content.intro}
      </p>

      <div style="font-size: 16px; line-height: 1.8;">
        ${content.body}
      </div>
    </section>
  `;
};

const buildQuizResultEmail = ({ firstName, profiles }) => {
  const isMixedProfile = profiles.length > 1;

  const profileTitles = profiles
    .map((profileKey) => profileContents[profileKey]?.title)
    .filter(Boolean);

  const profileBlocks = profiles.map(buildProfileBlock).join(separator);

  return `
    <div style="margin: 0; padding: 0; background: #faf8f6; font-family: Arial, sans-serif; color: #3d3733;">
      <div style="margin: 0 auto; padding: 28px 20px;">
        
        <p style="font-size: 16px; line-height: 1.8; margin: 0 0 16px;">
          Bonjour ${firstName} 🌸
        </p>

        <p style="font-size: 16px; line-height: 1.8; margin: 0 0 16px;">
          Merci d’avoir pris le temps de réaliser le test SPM.
        </p>

        <p style="font-size: 15px; line-height: 1.8; margin: 0 0 24px; color: #6f625c;">
          Les réponses que tu as partagées dans ce questionnaire restent confidentielles et sont utilisées uniquement dans le cadre de l’accompagnement proposé par Mélanie.
        </p>

        ${separator}

        ${
          isMixedProfile
            ? `
              <p style="font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: #8b6a5f; margin: 0 0 8px;">
                Ton profil de SPM
              </p>

              <h1 style="color: #3d3733; font-size: 30px; line-height: 1.25; margin: 0 0 16px;">
                Plusieurs tendances ressortent
              </h1>

              <p style="font-size: 16px; line-height: 1.8; margin: 0;">
                Ton résultat fait apparaître plusieurs profils principaux :
                <strong>${profileTitles.join(" + ")}</strong>.
              </p>

              <p style="font-size: 16px; line-height: 1.8; margin: 16px 0 0;">
                Cela signifie que ton expérience du SPM semble actuellement combiner plusieurs mécanismes émotionnels et corporels.
              </p>
            `
            : `
              <p style="font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: #8b6a5f; margin: 0 0 8px;">
                Ton profil de SPM
              </p>

              <h1 style="color: #3d3733; font-size: 30px; line-height: 1.25; margin: 0;">
                ${profileTitles[0]}
              </h1>
            `
        }

        ${separator}

        ${profileBlocks}

        ${separator}

        <section>
          <h2 style="color: #8b6a5f; font-size: 22px; line-height: 1.3; margin: 0 0 16px;">
            Et si tu prenais ce temps pour toi ?
          </h2>

          <p style="font-size: 16px; line-height: 1.8; margin: 0 0 24px;">
            Si tu ressens le besoin d’aller plus loin dans la compréhension de ton cycle, tu peux réserver un appel découverte gratuit avec Mélanie.
          </p>

          <p style="margin: 0 0 32px;">
            <a href="${process.env.BOOKING_URL || "#"}"
               style="display: inline-block; padding: 12px 22px; background: #8b6a5f; color: #ffffff; text-decoration: none; border-radius: 999px; font-size: 15px; font-weight: bold;">
              Réserver mon appel découverte
            </a>
          </p>
        </section>

        ${separator}

        <p style="font-size: 16px; line-height: 1.8; margin: 0 0 16px;">
          Chaque petit pas vers toi est déjà une transformation 🌷<br />
          Mélanie
        </p>

        <p style="font-size: 13px; line-height: 1.7; color: #7a6a64; margin: 0;">
          P.S. : Ce quiz n’est pas un diagnostic médical. Si tes symptômes perturbent ton quotidien, pense à consulter un·e professionnel·le de santé.
        </p>
      </div>
    </div>
  `;
};

module.exports = {
  buildQuizResultEmail,
};
