## Extensions location  
#### CC 2014 / 2015:
Mac:  
```
~/Library/Application Support/Adobe/CEP/extensions` 
```

Win (system):  
```
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
```  

Win (user):  
```
C:\Users\[ USER ]\AppData\Roaming\Adobe\CEP\extensions
```  

#### CC:  
Mac:  
```
~/Library/Application Support/Adobe/CEPServiceManager4/extensions
```  

Win (system):  
```
C:\Program Files (x86)\Common Files\Adobe\CEPServiceManager4\extensions
```  

Win (user):  
```
C:\Users\[ USER ]\AppData\Roaming\Adobe\CEPServiceManager4\extensions  
```
  
## LocalStorage location  
Mac:  
```
~/Library/Caches/CSXS/cep_cache/
```  
  
## Enabling debug mode  
**Mac:**    
Add a row with String key `PlayerDebugMode`, and value `1`
```
~/Library/Preferences/com.adobe.CSXS.[ version ].plist
```


**Win (regedit):**  
Add a String key named `PlayerDebugMode`, and value `1`
```
HKEY_CURRENT_USER/Software/Adobe/CSXS.[ version ]
``` 
