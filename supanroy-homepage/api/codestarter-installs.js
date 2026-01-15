// Vercel Serverless API route for CodeStarter installs


  let vsx = 0, vsm = 0;
  let errorLog = [];
export default async function handler(req, res) {
  let vsx = 0, vsm = 0, errorLog = [];
  try {
    // Open VSX API (statistics endpoint)
    const vsxRes = await fetch('https://open-vsx.org/api/Supan-Roy/codestarter-sroy/statistics');
    if (vsxRes.ok) {
      const vsxData = await vsxRes.json();
      vsx = vsxData.downloadCount || 0;
    } else {
      errorLog.push('Open VSX fetch failed: ' + vsxRes.status);
    }
  } catch (err) {
    errorLog.push('Open VSX error: ' + err.message);
  }
  try {
    // VS Marketplace API (unofficial, parses web page)
    const vsmRes = await fetch('https://marketplace.visualstudio.com/items?itemName=supanbeingroy.codestarter-sroy');
    if (vsmRes.ok) {
      const text = await vsmRes.text();
      const match = text.match(/([\d,]+) installs/i);
      if (match) {
        vsm = parseInt(match[1].replace(/,/g, ''));
      }
    } else {
      errorLog.push('VS Marketplace fetch failed: ' + vsmRes.status);
    }
  } catch (err) {
    errorLog.push('VS Marketplace error: ' + err.message);
  }
  res.status(200).json({
    total: vsx + vsm,
    vsx,
    vsm,
    errorLog
  });
}
