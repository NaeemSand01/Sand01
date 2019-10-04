using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Domain.PandappDomian
{
    public class Articles
    {
        public int Id { get; set; }

        public string ArticleMonth { get; set; }

        public string ArticleDay { get; set; }

        public string ArticleImage { get; set; }

        public string ArticleAuthor { get; set; }

        public string ArticleComments { get; set; }

        public int ArticleCommentsId { get; set; }

        public string ArticleSummary { get; set; }

        public int ArticleId { get; set; }

        public string ArticleYear { get; set; }

        public string ArticleTitle { get; set; }
    }
}