using System;
using System.Collections.Generic;

namespace GR.Laromedel.AccessPortal.Services.Models
{
    public class ResourceViewModel
    {
        public string Title {get; set;}
        public string Description {get; set;}
        public Uri ImageUri {get;set;}
        public Uri ResourceUri { get; set; }
        public Dictionary<string,string []> Classifications { get; set; }
    }
}