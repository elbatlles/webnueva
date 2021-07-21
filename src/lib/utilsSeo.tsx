export const subMeta = `[Angel Batlles] 🥷🏻`;
const index = {
  url: `/`,
  description: ` Soy un programador Freelance que desarollo proyectos MVP rapido y escalable`,
  meta: ` Soy un programador Freelance que desarollo proyectos MVP rapido y escalable`,
  title: `▷ Creo y diseño tus proyectos a medida | 🥷🏻 Programador MVP`,
};
const about = {
  url: `/about`,
  description: `Persona curiosa por vocación, intentando siempre aprender de mis errores`,
  meta: `Persona curiosa por vocación, intentando siempre aprender de mis errores`,
  title: `Sobre mi | ${subMeta}`,
};
const skills = {
  url: `/skills`,
  description: `No era el mas listo de clase pero siempre estaba dandolo todo para aprender`,
  meta: `No era el mas listo de clase pero siempre estaba dandolo todo para aprender`,
  title: `Mis habilidades  | ${subMeta}`,
};
const contact = {
  url: `/contact`,
  description: `Estoy aqui para ayudarte, y  soy bastante rápido en contestar, normalmente en 48 horas.`,
  meta: `Estoy aqui para ayudarte, y  soy bastante rápido en contestar, normalmente en 48 horas.`,
  title: `¿Nececitas algo?  | ${subMeta}`,
};
const blog = {
  url: `/blog`,
  description: `Aquí es donde podrás encontrar los artículos que escribo, sobre MVP's, cryptomonedas y desarollo`,
  meta: `Aquí es donde podrás encontrar los artículos que escribo, sobre MVP's, cryptomonedas y desarollo`,
  title: `Blog | ${subMeta}`,
};
const seoStatic: Array<{
  url: string;
  description: string;
  meta: string;
  title: string;
}> = [];
seoStatic.push(index);
seoStatic.push(about);
seoStatic.push(skills);
seoStatic.push(contact);
seoStatic.push(blog);
export default seoStatic;
