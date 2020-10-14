using System;
using System.Collections.Generic;

namespace GR.Laromedel.AccessPortal.Services.Models
{
    public class ResourceViewModel
    {
        public string Title { get; set; }
        public Uri ResourceUri { get; set; }
        public string ArticleNumber { get; set; }
        public string CollectionTitle { get; set; }
        public string CollectionPartNumber { get; set; } // like "2" or "2/10"
        public Uri ImageThumbUri { get; set; }
        public Uri ImageUri { get; set; }
        public int Edition { get; set; }
        public string Description { get; set; }
        public string Contributors { get; set; }
        public string[] Languages { get; set; }
        public string SupplierName { get; set; }
        public string[] Subjects { get; set; }
        public string[] Stage { get; set; }
    }
}
