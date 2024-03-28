const defaultState = `<p>Select a class</p>`;

// Function to update the accordion content based on the selected class and target container
function updateAccordionContent(selectedClass, targetContainer) {
    const accordionMap = {
      sage: sageAccordion, // Assuming sageAccordion is defined somewhere as the HTML content for Sage
      beast: beastAccordion, // Assuming beastAccordion is defined somewhere as the HTML content for Beast Huntress
      default: defaultState,
    };
  
    document.getElementById(targetContainer).innerHTML = accordionMap[selectedClass] || 'Select a class';
  }
  
  // Event listener for the first dropdown changes
  document.getElementById('classDropdown1').addEventListener('change', function() {
    updateAccordionContent(this.value, 'accordionContainer_left');
  });
  
  // Event listener for the second dropdown changes
  document.getElementById('classDropdown2').addEventListener('change', function() {
    updateAccordionContent(this.value, 'accordionContainer_right');
  });
  
  // Initialize both accordions with default content
  updateAccordionContent('defaultState', 'accordionContainer_left');
  updateAccordionContent('defaultState', 'accordionContainer_right');
  