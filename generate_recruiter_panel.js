const fs = require('fs');

function buildRecruiterHTML() {
  return `${require('./recruiter_parts/part1_head_sidebar.js')}
${require('./recruiter_parts/part2_dashboard.js')}
${require('./recruiter_parts/part3_create_test.js')}
${require('./recruiter_parts/part4_my_tests.js')}
${require('./recruiter_parts/part5_candidates.js')}
${require('./recruiter_parts/part6_candidate_eval.js')}
${require('./recruiter_parts/part7_import_invite.js')}
${require('./recruiter_parts/part8_modifications.js')}
${require('./recruiter_parts/part9_messages_tickets.js')}
${require('./recruiter_parts/part10_modals_scripts.js')}`;
}

const html = buildRecruiterHTML();
fs.writeFileSync('recruiter-panel.html', html, 'utf8');
fs.writeFileSync('recruiter-dashboard.html', html, 'utf8');
console.log('Successfully written recruiter-panel.html & recruiter-dashboard.html (' + Buffer.byteLength(html) + ' bytes)!');
