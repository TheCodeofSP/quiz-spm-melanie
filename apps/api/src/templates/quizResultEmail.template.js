const profileContents = require("../data/profileContents");

const COLORS = {
  background: "#fffaf7",
  text: "#2f2a2a",
  muted: "#6f6666",
  pink: "#d98fa3",
  pinkSoft: "#f8e5eb",
  pinkDark: "#b96f84",
  greenDark: "#4f7158",
  border: "#eadeda",
};

const separator = `
  <div style="height: 1px; background: ${COLORS.border}; margin: 40px 0;"></div>
`;

const buildProfileBlock = (profileKey) => {
  const content = profileContents[profileKey];

  if (!content) return "";

  return `
    <section>
      <p style="font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${COLORS.pinkDark}; margin: 0 0 10px; font-weight: bold;">
        Ton profil en détail
      </p>

      <h2 style="color: ${COLORS.text}; font-size: 28px; line-height: 1.25; margin: 0 0 18px;">
        SPM « ${content.title} »
      </h2>

      <p style="font-size: 17px; line-height: 1.9; margin: 0 0 24px; color: ${COLORS.muted};">
        ${content.intro}
      </p>

      <div style="font-size: 16px; line-height: 1.9; color: ${COLORS.text};">
        ${content.body}
      </div>
    </section>
  `;
};

const buildResultBlock = ({ profileTitles, isMixedProfile }) => {
  console.log("MELANIE_PHOTO_URL =", melaniePhotoUrl);

  const melaniePhotoUrl = process.env.MELANIE_PHOTO_URL;

  const resultSentence = isMixedProfile
    ? `Ton profil semble mélanger plusieurs tendances : ${profileTitles.join(" + ")}.`
    : `Ton profil est : ${profileTitles[0]}.`;

  return `
    <section>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          ${
            melaniePhotoUrl
              ? `
                <td width="96" valign="top" style="padding-right: 20px;">
                  <img
                    src="${melaniePhotoUrl}"
                    alt="Portrait de Mélanie Dizet"
                    width="78"
                    height="78"
                    style="display: block; width: 78px; height: 78px; object-fit: cover; border-radius: 50%; border: 4px solid ${COLORS.pinkSoft};"
                  />
                </td>
              `
              : ""
          }

          <td valign="top">
            <p style="font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${COLORS.pinkDark}; margin: 0 0 10px; font-weight: bold;">
              Ce que ton test révèle
            </p>

            <h1 style="color: ${COLORS.text}; font-size: 31px; line-height: 1.25; margin: 0 0 16px;">
              “${resultSentence}”
            </h1>

            <p style="font-size: 16px; line-height: 1.9; margin: 0; color: ${COLORS.muted};">
              Ce résultat n’est pas une étiquette. C’est une première lecture de ce que ton corps semble exprimer à travers ton SPM.
            </p>
          </td>
        </tr>
      </table>

      ${
        isMixedProfile
          ? `
            <p style="font-size: 16px; line-height: 1.9; margin: 24px 0 0; color: ${COLORS.text};">
              Quand plusieurs profils ressortent, cela signifie souvent que ton corps parle sur plusieurs plans à la fois : émotionnel, hormonal, nerveux ou physique.
            </p>
          `
          : ""
      }
    </section>
  `;
};

const buildCtaBlock = ({ mainProfileContent, isMixedProfile }) => {
  const title = isMixedProfile
    ? "Et si on regardait cela ensemble ?"
    : mainProfileContent?.ctaTitle || "Et si on regardait cela ensemble ?";

  const text = isMixedProfile
    ? "Si tu ressens que ce résultat fait écho à ce que tu vis, tu peux réserver un appel découverte gratuit. Ce sera un espace pour poser des mots sur tes symptômes, ton cycle et ce que ton corps essaie peut-être de te signaler."
    : mainProfileContent?.ctaText ||
      "Si tu ressens que ce résultat fait écho à ce que tu vis, tu peux réserver un appel découverte gratuit avec Mélanie.";

  const button =
    mainProfileContent?.ctaButton || "Réserver mon appel découverte";

  return `
    <section>
      <p style="font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${COLORS.greenDark}; margin: 0 0 10px; font-weight: bold;">
        Aller plus loin
      </p>

      <h2 style="color: ${COLORS.text}; font-size: 27px; line-height: 1.3; margin: 0 0 18px;">
        ${title}
      </h2>

      <p style="font-size: 16px; line-height: 1.9; margin: 0 0 26px; color: ${COLORS.text};">
        ${text}
      </p>

      <p style="margin: 0;">
        <a href="${process.env.BOOKING_URL || "#"}"
           style="display: inline-block; padding: 14px 24px; background: ${COLORS.pink}; color: #ffffff; text-decoration: none; border-radius: 999px; font-size: 15px; font-weight: bold;">
          ${button}
        </a>
      </p>
    </section>
  `;
};

const buildQuizResultEmail = ({ firstName, profiles }) => {
  const safeProfiles = Array.isArray(profiles) ? profiles : [];

  const profileTitles = safeProfiles
    .map((profileKey) => profileContents[profileKey]?.title)
    .filter(Boolean);

  const isMixedProfile = profileTitles.length > 1;
  const mainProfileContent =
    safeProfiles.length === 1 ? profileContents[safeProfiles[0]] : null;

  const profileBlocks = safeProfiles.map(buildProfileBlock).join(separator);

  const disclaimer =
    mainProfileContent?.disclaimer ||
    "Ce quiz n’est pas un diagnostic médical. Si tes symptômes perturbent ton quotidien, pense à consulter un·e professionnel·le de santé.";

  return `
    <div style="margin: 0; padding: 0; background: ${COLORS.background}; font-family: Arial, sans-serif; color: ${COLORS.text};">
      <div style="max-width: 680px; margin: 0 auto; padding: 42px 20px 48px;">

        <div style="text-align: center; margin-bottom: 38px;">
          <p style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: ${COLORS.pinkDark}; margin: 0 0 14px; font-weight: bold;">
            Test de Personnalité SPM
          </p>

          <h1 style="font-size: 36px; line-height: 1.15; color: ${COLORS.text}; margin: 0 0 16px;">
            Ton résultat personnalisé
          </h1>

          <p style="font-size: 16px; line-height: 1.8; color: ${COLORS.muted}; margin: 0;">
            Une première lecture de ton cycle, de tes symptômes et des messages que ton corps peut t’envoyer.
          </p>
        </div>

        <p style="font-size: 17px; line-height: 1.9; margin: 0 0 18px;">
          Bonjour ${firstName} 🌸
        </p>

        <p style="font-size: 16px; line-height: 1.9; margin: 0 0 18px;">
          Merci d’avoir pris le temps de réaliser ce test. Les réponses que tu as partagées permettent de mieux comprendre la façon dont ton SPM se manifeste chez toi.
        </p>

        <p style="font-size: 15px; line-height: 1.9; margin: 0; color: ${COLORS.muted};">
          Elles restent confidentielles et sont utilisées uniquement dans le cadre de l’accompagnement proposé par Mélanie.
        </p>

        ${separator}

        ${
          profileTitles.length
            ? buildResultBlock({ profileTitles, isMixedProfile })
            : `
              <p style="font-size: 16px; line-height: 1.9; margin: 0;">
                Ton résultat a bien été reçu. Mélanie pourra t’aider à l’interpréter avec plus de précision.
              </p>
            `
        }

        ${separator}

        ${profileBlocks}

        ${separator}

        ${buildCtaBlock({ mainProfileContent, isMixedProfile })}

        ${separator}

        <p style="font-size: 16px; line-height: 1.9; margin: 0 0 16px;">
          Prends soin de toi, avec douceur 🌷<br />
          Mélanie
        </p>

        <p style="font-size: 13px; line-height: 1.7; color: #7a6a64; margin: 0;">
          P.S. : ${disclaimer}
        </p>
      </div>
    </div>
  `;
};

module.exports = {
  buildQuizResultEmail,
};
