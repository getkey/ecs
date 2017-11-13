export default class Query {
	constructor(test) {
		this.test = test;
	}

	query() {
		// return a list of entities
	}

  /**
   * dispose the query by exiting all the entities
   *
   * @method  dispose
   */
  dispose() {
	  /*for (let i = 0, entity; entity = this.entities[i]; i += 1) {
      entity.removeSystem(this);
	  this.exit(entity);
	}*/
  }
}
