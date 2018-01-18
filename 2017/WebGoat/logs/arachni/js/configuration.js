jQuery(function ($) {
    var download_button = $('#configuration-download');

    // Create a blob object.
    var bb = new Blob(
        ["---\nsession: {}\ninput:\n  values:\n    name: arachni_name\n    user: arachni_user\n    usr: arachni_user\n    pass: 5543!%arachni_secret\n    txt: arachni_text\n    num: '132'\n    amount: '100'\n    mail: arachni@email.gr\n    account: '12'\n    id: '1'\n  default_values:\n    name: arachni_name\n    user: arachni_user\n    usr: arachni_user\n    pass: 5543!%arachni_secret\n    txt: arachni_text\n    num: '132'\n    amount: '100'\n    mail: arachni@email.gr\n    account: '12'\n    id: '1'\n  without_defaults: true\n  force: false\nbrowser_cluster:\n  local_storage: {}\n  wait_for_elements: {}\n  pool_size: 6\n  job_timeout: 10\n  worker_time_to_live: 100\n  ignore_images: false\n  screen_width: 1600\n  screen_height: 1200\naudit:\n  parameter_values: true\n  exclude_vector_patterns: []\n  include_vector_patterns: []\n  link_templates: []\n  links: true\n  forms: true\n  cookies: true\n  jsons: true\n  xmls: true\n  ui_forms: true\n  ui_inputs: true\nhttp:\n  user_agent: Arachni/v1.5.1\n  request_timeout: 10000\n  request_redirect_limit: 5\n  request_concurrency: 20\n  request_queue_size: 100\n  request_headers: {}\n  response_max_size: 500000\n  cookies: {}\n  authentication_type: auto\nscope:\n  redundant_path_patterns: {}\n  dom_depth_limit: 5\n  exclude_file_extensions:\n  - \"[]\"\n  exclude_path_patterns: []\n  exclude_content_patterns: []\n  include_path_patterns: []\n  restrict_paths: []\n  extend_paths: []\n  url_rewrites: {}\ndatastore:\n  token: fa37a259f9ad5d711fd105ff165d6963\nchecks:\n- allowed_methods\n- backdoors\n- backup_directories\n- backup_files\n- captcha\n- code_injection\n- code_injection_php_input_wrapper\n- code_injection_timing\n- common_admin_interfaces\n- common_directories\n- common_files\n- cookie_set_for_parent_domain\n- credit_card\n- csrf\n- cvs_svn_users\n- directory_listing\n- emails\n- file_inclusion\n- form_upload\n- hsts\n- htaccess_limit\n- html_objects\n- http_only_cookies\n- http_put\n- insecure_client_access_policy\n- insecure_cookies\n- insecure_cors_policy\n- insecure_cross_domain_policy_access\n- insecure_cross_domain_policy_headers\n- interesting_responses\n- ldap_injection\n- localstart_asp\n- mixed_resource\n- no_sql_injection\n- no_sql_injection_differential\n- origin_spoof_access_restriction_bypass\n- os_cmd_injection\n- os_cmd_injection_timing\n- password_autocomplete\n- path_traversal\n- private_ip\n- response_splitting\n- rfi\n- session_fixation\n- source_code_disclosure\n- sql_injection\n- sql_injection_differential\n- sql_injection_timing\n- ssn\n- trainer\n- unencrypted_password_forms\n- unvalidated_redirect\n- unvalidated_redirect_dom\n- webdav\n- x_frame_options\n- xpath_injection\n- xss\n- xss_dom\n- xss_dom_script_context\n- xss_event\n- xss_path\n- xss_script_context\n- xss_tag\n- xst\n- xxe\nplatforms: []\nplugins:\n  autothrottle: {}\n  discovery: {}\n  healthmap: {}\n  timing_attacks: {}\n  uniformity: {}\nno_fingerprinting: false\nauthorized_by: \nurl: http://192.168.0.10:8080/WebGoat/start.mvc\n"],
        { type : 'application/yaml' }
    );

    download_button.attr( 'href', window.URL.createObjectURL( bb ) );
    download_button.attr( 'download', '192.168.0.10-profile.afp' );
});
