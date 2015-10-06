Meteor.publish('posts', () => {
	return Posts.find();
});

if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Bobo.io',
		url: 'http://google.com'
	});

	Posts.insert({
		title: 'MEteor',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'the Meteor book',
		url: 'http://themeteorbook.com'
	});
}