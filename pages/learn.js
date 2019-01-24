import Layout from './components/layout';
import styles from './scss/app.scss';
import Composition from './components/composition';

export default () => (
  <Layout>
    <div className={styles.learn}>
      <div className={styles.learn_header}>
        <h1>LEARN</h1>
      </div>
      <div className={styles.article_container}>
        <div className={styles.article_section}>
          <h1>Orcas, salmon, and the Pacific Northwest</h1>
          <div className={styles.line} />
          <p>
            To better understand the relationship the Southern Resident orcas
            have with salmon, we need to travel back in time. About 13,000 years
            ago, the last glaciers that carved out our majestic mountains had
            finally receded. They left in their wake furrowed land that was rich
            with moisture, glacial sediment, smooth broken stones, and fresh
            cold water that would form our rivers. The abundance of moisture in
            the soil gave birth to the towering trees and native plants that
            shade, filter, stabilize, and oxygenate the riverbeds to this day.
            This protected cold water created the perfect spawning habitat for
            evolving salmonids. For the last 13,000 years, the clean, covered,
            nutritive cold water with large smooth rocks to shelter fertilized
            eggs allowed the first few salmon to evolve into six major
            subspecies numbering into the millions each: Pink, Steelhead, Coho,
            Chum, Sockeye, and the largest of all salmon
            species&nbsp;—&nbsp;Chinook.
          </p>
        </div>
        <img src='./static/images/learn_images/chinook.jpg' />
        <div className={styles.article_section}>
          <p>
            The temperate forest ecosystem of the Pacific Northwest developed
            into one giant living biological organism with rivers serving as the
            arteries and veins transporting the red blood cells—salmon—upriver
            where they spawn the next generation of salmon. This giant inland
            organism evolved around the presence of Pacific salmon. Over 200
            species of plants, birds, and mammals (terrestrial and marine alike)
            depend on salmon for survival. Once salmon have reached their
            spawning grounds, bears and eagles pluck adult salmon from the river
            to eat often leaving the nitrogen, carbon, and phosphorous rich
            carcasses behind on the forest floor where they provide nourishment
            to the giant Douglas Firs and Western Hemlock trees. In return,
            these towering trees shade and protect the river making it habitable
            for fish.
          </p>
        </div>
        <img src='./static/images/learn_images/sockeye.jpg' />
        <div className={styles.article_section}>
          <p>
            As salmon migrated across the northeast Pacific for thousands of
            years, some of the ocean’s top predators, orcas and pinnipeds,
            evolved with them. Pinnipeds, such as harbor seals and sea lions,
            eat a wide variety of fish aside from salmon including rockfish,
            herring, smelt, and squid. Today, as large numbers of pinnipeds
            inhabit the coastal waters of the north Pacific, one major ecotype
            of orca—known as the transient killer whale—are also flourishing.
            Transient killer whales travel in family pods made up of five or six
            individuals, usually a mother and her offspring. They occasionally
            group together with other pods of orcas, related or not, in order to
            reproduce, socialize, and hunt. The diets of these killer whales
            also include other large whales and porpoises.
            <br />
            <br />A separate ecotype killer whales thrive off the salmon rich,
            nutrient dense, forest fed waters of what today is known as the
            Salish Sea of Washington and British Columbia. Two distinct
            communities with somewhat overlapping territories exist, Northern
            Residents and Southern Residents. Both rely on salmon—mostly
            Chinook. Southern Residents are the main focus of Whale Scout’s
            programs and are made up of 3 matriarchal family pods (J, K, and L
            pods). Yet a third ecotype of killer whale exists in the Salish Sea:
            offshore killer whales. Rarely seen, these whales are thought to eat
            mostly sharks and as a result have worn-down teeth from the rough
            skin.
          </p>
        </div>
      </div>
      <Composition />
    </div>
  </Layout>
);
