let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "Coding",
  
    buildSentence() {
      // Check if all properties are present
      return this.subject && this.verb && this.object
        ? `${this.subject} ${this.verb} ${this.object}.`
        : "Incomplete sentence";
    },
    updateProperty(property, value) {
      if (this.hasOwnProperty(property)) {
        this[property] = value;
        return `${property} updated to "${value}"`;
      } else {
        return "Invalid property";
      }
    }
  };
  
  console.log(sentenceBuilder.buildSentence());
  
  sentenceBuilder.updateProperty("subject", "The cat");
  sentenceBuilder.updateProperty("verb", "is chasing");
  sentenceBuilder.updateProperty("object", "a mouse");
  
  console.log(sentenceBuilder.buildSentence()); 