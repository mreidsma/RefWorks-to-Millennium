<script>
$(document).ready(function() {

	// Add RefWorks button by Matthew Reidsma, 2011. This only took 23 minutes, so you might want to make 
	// something more elegant. This assumes that you have both Millennium and Encore since it redirects to
	// your Encore instance to export to RefWorks.
	
	var encoreURL = 'http://encore.catalog.gvsu.edu:80/iii/encore/record/C|R'; // Change this to match your institution
	var iconURL = 'http://gvsulib.com/labs/link-resolver/img/refworks-logo.gif'; // Change this to the URL for your refworks icon
	
	// Don't edit below this line unless you know what you're doing.

	var biblink = jQuery("#recordnum").attr("href"); // Grab the permalink
	biblink = biblink.split("="); 
	var bibrecordno = biblink[1]; // Pull out the record number from the URL
	var text = 'Title';

	jQuery('table#bibDisplayLayout table td.bibInfoLabel').filter(function() {
    	if (jQuery.trim(jQuery(this).text()) === text ) { // Table cell is the Title/MARC 245 and not another title field
			jQuery(this).next().append('<a href="http://www.refworks.com/express/ExpressImport.asp?vendor=III&filter=MARC+Format&encoding=65001&url=' + encoreURL + bibrecordno + '?marcData=Y&lang=eng&suite=pearl" class="reforks-export"><img src="' + iconURL + '" alt="Export to RefWorks" style="position: relative; top: .5em;"/></a>');
		} 
	});
	
});
</script>

	
	