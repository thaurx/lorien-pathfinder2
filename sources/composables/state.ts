import type { Ref } from "vue";

export const usePersistedState = <T extends Object>(
  identifier: string,
  defaultOptions: T
): Ref<T> => {
  const persistedObject = useState<T>(identifier, (): T => {
    const item = localStorage.getItem(identifier);
    if (!item) return defaultOptions;

    return (JSON.parse(item) as T) ?? defaultOptions;
  });

  watch(
    persistedObject,
    (object) => {
      localStorage.setItem(identifier, JSON.stringify(object));
    },
    { deep: true }
  );

  return persistedObject;
};

export const refreshPersistedState = () => {
  const page = usePersistedState("PAGE", 0);

  const force = usePersistedState("CARACT_FORCE", {
    full: 0,
    mod: 0,
  });

  const dexterite = usePersistedState("CARACT_DEXTERITE", {
    full: 0,
    mod: 0,
  });

  const constitution = usePersistedState("CARACT_CONSTITUTION", {
    full: 0,
    mod: 0,
  });

  const intelligence = usePersistedState("CARACT_INTELLIGENCE", {
    full: 0,
    mod: 0,
  });

  const sagesse = usePersistedState("CARACT_SAGESSE", {
    full: 0,
    mod: 0,
  });

  const charisme = usePersistedState("CARACT_CHARISME", {
    full: 0,
    mod: 0,
  });

  const armure = usePersistedState("ARMURE", {
    selected: '',
    maitrise: 0,
    ca: 0,
    caBonus: 0,
  });

  const vigueur = usePersistedState("SAUVE_VIGUEUR", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
  
  const reflexes = usePersistedState("SAUVE_REFLEXES", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
  
  const volonte = usePersistedState("SAUVE_VOLONTE", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });

  const niveau = usePersistedState("NIVEAU", 0);

  const pointsDeVie = usePersistedState("POINTS_DE_VIE", {
    max: 0,
    acutel: 0,
  });
  
  const perception = usePersistedState("PERCEPTION", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
  
  const ddDeClasse = usePersistedState("DD_DE_CLASSE", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
  
  const vitesse = usePersistedState("VITESSE", {
    full: 0,
  });

  // Calcul Modificateur
  force.value.mod = Math.floor((force.value.full - 10) / 2);
  dexterite.value.mod = Math.floor((dexterite.value.full - 10) / 2);
  constitution.value.mod = Math.floor((constitution.value.full - 10) / 2);
  intelligence.value.mod = Math.floor((intelligence.value.full - 10) / 2);
  sagesse.value.mod = Math.floor((sagesse.value.full - 10) / 2);
  charisme.value.mod = Math.floor((charisme.value.full - 10) / 2);

  // Calcul Classe d'armure
  armure.value.maitrise = calculMaitrise(armure.value.selected);
  armure.value.ca = 10 + dexterite.value.mod + armure.value.maitrise + armure.value.caBonus;

  // Calcul Jets de Sauvergarde
  vigueur.value.maitrise = calculMaitrise(vigueur.value.selected);
  vigueur.value.full = constitution.value.mod + vigueur.value.maitrise + vigueur.value.bonus;

  reflexes.value.maitrise = calculMaitrise(reflexes.value.selected);
  reflexes.value.full = dexterite.value.mod + reflexes.value.maitrise + reflexes.value.bonus;
  
  volonte.value.maitrise = calculMaitrise(volonte.value.selected);
  volonte.value.full = sagesse.value.mod + volonte.value.maitrise + volonte.value.bonus;

  // Calculs Points de Vie
  pointsDeVie.value.max = 6 * niveau.value + 6 * constitution.value.mod
  
  // Calcul Perception
  perception.value.maitrise = calculMaitrise(perception.value.selected);
  perception.value.full = sagesse.value.mod + perception.value.maitrise + perception.value.bonus;

  // Calcul DD de classe
  ddDeClasse.value.maitrise = calculMaitrise(ddDeClasse.value.selected);
  ddDeClasse.value.full = intelligence.value.mod + ddDeClasse.value.maitrise + ddDeClasse.value.bonus;

  // Calcul DD de Classe
  vitesse.value.full = 9;
};

function calculMaitrise(selected: string): number {
  const niveau = usePersistedState("NIVEAU", 0);

  switch (selected) {
    case "Qualifié":
      return 2 + niveau.value;
    case "Expert":
      return 4 + niveau.value;
    case "Maitre":
      return 6 + niveau.value;
    case "Legendaire":
      return 8 + niveau.value;
    default:
      return 0;
  }
}
