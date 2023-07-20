// Prototype interface
interface BusinessCardPrototype {
    public function clone(): BusinessCardPrototype;
}

// Concrete prototype
class BusinessCard implements BusinessCardPrototype {
    private $name;
    private $jobTitle;
    private $company;

    public function __construct($name, $jobTitle, $company) {
        $this->name = $name;
        $this->jobTitle = $jobTitle;
        $this->company = $company;
    }

    public function clone(): BusinessCardPrototype {
        return new BusinessCard($this->name, $this->jobTitle, $this->company);
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setJobTitle($jobTitle) {
        $this->jobTitle = $jobTitle;
    }

    public function setCompany($company) {
        $this->company = $company;
    }

    public function printDetails() {
        echo "Name: " . $this->name . "<br>";
        echo "Job Title: " . $this->jobTitle . "<br>";
        echo "Company: " . $this->company . "<br>";
    }
}

// Usage example
$prototype = new BusinessCard("John Doe", "Developer", "ABC Company");
$card1 = $prototype->clone();
$card1->setName("Jane Doe");
$card1->setJobTitle("Designer");

$card2 = $prototype->clone();
$card2->setName("Mike Smith");
$card2->setCompany("XYZ Corporation");

$card1->printDetails(); // Output: Name: Jane Doe, Job Title: Designer, Company: ABC Company
$card2->printDetails(); // Output: Name: Mike Smith, Job Title: Developer, Company: XYZ Corporation