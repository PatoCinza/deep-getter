## Members

<dl>
<dt><a href="#deepGet">deepGet</a> ⇒ <code>*</code> | <code><a href="#Nothing">Nothing</a></code></dt>
<dd><p>Access deep properties on object going through the given path,
returns <a href="#Nothing">Nothing</a> if it is not possible to fetch the value</p>
</dd>
<dt><a href="#isNothing">isNothing</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if x is Nothing</p>
</dd>
<dt><a href="#deepGetOrElse">deepGetOrElse</a> ⇒ <code>*</code></dt>
<dd><p>Access deep properties on object going through the given path
If it would return a <a href="#Nothing">Nothing</a>, it returns <code>fallback</code> instead</p>
</dd>
</dl>

## Interfaces

<dl>
<dt><a href="#Nothing">Nothing</a></dt>
<dd><p>Represents an error in some accessing operation</p>
</dd>
</dl>

<a name="Nothing"></a>

## Nothing
Represents an error in some accessing operation

**Kind**: global interface  
**Properties**

| Name | Type |
| --- | --- |
| isNothing | <code>true</code> | 

<a name="deepGet"></a>

## deepGet ⇒ <code>\*</code> \| [<code>Nothing</code>](#Nothing)
Access deep properties on object going through the given path,
returns [Nothing](#Nothing) if it is not possible to fetch the value

**Kind**: global variable  
**Returns**: <code>\*</code> \| [<code>Nothing</code>](#Nothing) - Final accessed property or nothing  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object to be accessed |
| path | <code>String</code> | Path to be accessed separated by . |

<a name="isNothing"></a>

## isNothing ⇒ <code>Boolean</code>
Checks if x is Nothing

**Kind**: global variable  
**Returns**: <code>Boolean</code> - whether it's equal or not  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | Anything you want to test |

<a name="deepGetOrElse"></a>

## deepGetOrElse ⇒ <code>\*</code>
Access deep properties on object going through the given path
If it would return a [Nothing](#Nothing), it returns `fallback` instead

**Kind**: global variable  
**Returns**: <code>\*</code> - The accessed prop, or the fallback value  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object to be accessed |
| path | <code>String</code> | Path to be accessed separated by . |
| fallback | <code>\*</code> | the value to return if obj[path] is Nothing |

