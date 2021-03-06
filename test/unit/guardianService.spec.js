describe('guardian api', function(){
  beforeEach(module("newsSummaryApp"));

  var guardianService, httpBackend;
  var todaysDate = todaysDate();
  var todaysArticles = {response:{results:[{
                                                  type: "article",
                                                  sectionId: "commentisfree",
                                                  webTitle: "Donald Trump's woman problem: they don't like him, not one little bit | Richard Wolffe",
                                                  webPublicationDate: "2016-06-03T17:53:40Z",
                                                  id: "commentisfree/2016/jun/03/donald-trump-woman-problem-female-voter-support-poll-numbers",
                                                  webUrl: "https://www.theguardian.com/commentisfree/2016/jun/03/donald-trump-woman-problem-female-voter-support-poll-numbers",
                                                  apiUrl: "https://content.guardianapis.com/commentisfree/2016/jun/03/donald-trump-woman-problem-female-voter-support-poll-numbers",
                                                  sectionName: "Opinion"
                                                }]}};
  function todaysDate() {
    var d = new Date()
    var curr_year = d.getFullYear()
    var curr_month = d.getMonth()
    var curr_day = d.getDate()
    return (curr_year + "-" + curr_month + "-" + curr_day)
  }

  beforeEach(inject(function(_guardianService_, $httpBackend){
    guardianService = _guardianService_;
    httpBackend = $httpBackend;
  }));

  it('receives todays articles from the guardian api', function(){
    httpBackend.expectGET("http://content.guardianapis.com/search?from-date="+todaysDate+"&api-key=test").respond(todaysArticles);
    guardianService.getAllArticles().then(function(articles){
      expect(articles[0].title).toEqual("Donald Trump's woman problem: they don't like him, not one little bit | Richard Wolffe");
    });
    httpBackend.flush();
  });

  it('receives todays articles from the guardian api', function(){
    httpBackend.expectGET("http://content.guardianapis.com/search?from-date="+todaysDate+"&api-key=test").respond(todaysArticles);
    guardianService.getAllArticles().then(function(articles){
      expect(articles[0].date).toEqual("2016-06-03T17:53:40Z");
    });
    httpBackend.flush();
  });

  it('receives todays articles from the guardian api', function(){
    httpBackend.expectGET("http://content.guardianapis.com/search?from-date="+todaysDate+"&api-key=test").respond(todaysArticles);
    guardianService.getAllArticles().then(function(articles){
      expect(articles[0].url).toEqual("https://www.theguardian.com/commentisfree/2016/jun/03/donald-trump-woman-problem-female-voter-support-poll-numbers");
    });
    httpBackend.flush();
  });
});
